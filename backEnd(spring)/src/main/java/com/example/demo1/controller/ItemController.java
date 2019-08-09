package com.example.demo1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo1.dao.ItemsRepo;
import com.example.demo1.model.Item;

@RestController
public class ItemController {

	@Autowired
	ItemsRepo rep;
	@GetMapping("/items")
	@CrossOrigin(origins="http://localhost:3000")
	public List<Item> show() {
		return rep.findAll();
	}
	@PostMapping("item")
	@CrossOrigin(origins="http://localhost:3000")
	public Item add(@RequestBody Item i) {
		rep.save(i);
		return i;
	}
	@PutMapping("item")
	@CrossOrigin(origins="http://localhost:3000")
	public void update(@RequestBody Item i) {
		rep.save(i);
	}
	@DeleteMapping("item/{id}")
	@CrossOrigin(origins="http://localhost:3000")
	public void delete(@PathVariable int id) {
		rep.deleteById(id);
	}
}
