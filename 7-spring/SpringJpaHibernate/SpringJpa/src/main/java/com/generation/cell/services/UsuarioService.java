package com.generation.cell.services;

import org.springframework.stereotype.Service;

import com.generation.cell.models.UsuarioModel;
import com.generation.cell.repositories.UsuarioRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;


@Service


public class UsuarioService {

	@Autowired
	UsuarioRepository usuariorepository;
	
	public ArrayList<UsuarioModel> obtenerusuarios(){
		return (ArrayList<UsuarioModel>)usuariorepository.findAll();
	}
	
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuariorepository.save(usuario);
    }

}
