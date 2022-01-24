<?php
	defined('BASEPATH') OR exit('No direct script access allowed');

	class Pagina extends CI_Controller{

		function __construct(){
			parent::__construct();
			$this->load->model('bd_model', 'model');
		}

		public function index(){
			
		}

		public function cadastrar(){
			header("Access-Control-Allow-Origin:*");
			header("Content-type: application/json");
			header("Access-Control-Allow-Headers: Content-Type");
			header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

			$json = file_get_contents('php://input');
			$dados = json_decode($json);

			$result = $this->model->post($dados);

			echo json_encode(['mensagem' => 'Sucesso']);
		}

		public function editar(){
			header("Access-Control-Allow-Origin:*");
			header("Content-type: application/json");
			header("Access-Control-Allow-Headers: Content-Type");
			header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

			$json = file_get_contents('php://input');
			$dados = json_decode($json);

			$result = $this->model->put($dados);

			echo json_encode(['mensagem' => 'Sucesso']);
		}

		public function excluir(){
			header("Access-Control-Allow-Origin:*");
			header("Content-type: application/json");
			header("Access-Control-Allow-Headers: Content-Type");
			header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

			$json = file_get_contents('php://input');
			$dados = json_decode($json);

			$result = $this->model->delete($dados->id);

			echo json_encode(['mensagem' => 'Sucesso']);
		}

		public function ligas(){
			header("Access-Control-Allow-Origin:*");
			header("Content-type: application/json");
			header("Access-Control-Allow-Headers: Content-Type");
			header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

			$dados = $this->model->get_ligas();

			echo json_encode($dados);
		}

		public function buscar(){
			header("Access-Control-Allow-Origin:*");
			header("Content-type: application/json");
			header("Access-Control-Allow-Headers: Content-Type");
			header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

			$id = $this->input->get('id');

			$result = $this->model->buscar($id);

			echo json_encode($result);
		}

		public function listar(){
			header("Access-Control-Allow-Origin:*");
			header("Content-type: application/json");
			header("Access-Control-Allow-Headers: Content-Type");
			header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

			$retorno = $this->model->get();

			$result = $this->model->get_ligas();

			$quant = $this->model->count();

			$dados = array();

			foreach($retorno as $linha){
				for($x = 0; $x < $quant->qtd; $x++){
					if($linha->ligaId == $result[$x]->id){
						$liga = $result[$x]->nome;
						$pais = $result[$x]->pais;
						$x = $quant->qtd;
					}
				}
				$dados[] = array(
							"id" => $linha->id,
							"clube" => $linha->nome,
							"fundacao" => $linha->anoFundacao,
							"ligaId" => $linha->ligaId,
							"liga" => $liga,
							"pais" => $pais
						);
			}

			echo json_encode($dados);
		}
	}
?>