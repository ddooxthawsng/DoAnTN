package com.example.be.Service.impl;

import com.example.be.Entity.SanPhamEntity;
import com.example.be.Repository.SanPhamRepo;
import com.example.be.Service.ISanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SanPhamService implements ISanPhamService {
    @Autowired
    SanPhamRepo repo;

    @Override
    public List<SanPhamEntity> findAll() {
        return repo.findAll();
    }
}
