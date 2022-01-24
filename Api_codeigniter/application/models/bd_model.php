<?php
	defined('BASEPATH') OR exit('No direct script access allowed');

	class Bd_model extends CI_Model {

		function __construct(){
			parent::__construct();
		}

		public function get(){
			$this->db->select('clubes.*')
				->from('clubes');
			$result = $this->db->get();
			if($result->num_rows() > 0){
				return $result->result();
			}else{
				return 0;
			}
		}

		public function post($dados){
			$this->db->insert('clubes', $dados);
			return $this->db->insert_id();
		}

		public function put($dados){
			$this->db->where('id', $dados->id);
			unset($dados->id);
			$this->db->update('clubes', $dados);
			return $this->db->affected_rows();
		}

		public function delete($id){
			$this->db->where('id', $id);
			$this->db->delete('clubes');
			return $this->db->affected_rows();
		}

		public function buscar($id){
			$this->db->select('*')
				->from('clubes')
				->where('id', $id);
			$result = $this->db->get();
			if($result->num_rows() > 0){
				return $result->row();
			}else{
				return 0;
			}
		}

		public function get_ligas(){
			$this->db->select('*')
				->from('ligas');
			$result = $this->db->get();
			if($result->num_rows() > 0){
				return $result->result();
			}else{
				return 0;
			}
		}

		public function buscar_liga($id){
			$this->db->select('nome, pais')
				->from('ligas')
				->where('id', $id);
			$result = $this->db->get();
			if($result->num_rows() > 0){
				return $result->row();
			}else{
				return 0;
			}
		}

		public function count(){
			$this->db
				->select('COUNT(*) AS qtd')
				->from('ligas');
			$result = $this->db->get();
			if($result->num_rows() > 0){
				return $result->row();
			}else{
				return NULL;
			}
		}
	}
?>