package com.example.demo1.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo1.model.Item;

public interface ItemsRepo extends JpaRepository<Item, Integer>{

}
