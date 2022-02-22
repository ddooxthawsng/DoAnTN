package com.example.be.Controller;

import com.example.be.Entity.SanPhamEntity;
import com.example.be.Repository.SanPhamRepo;
import com.example.be.Service.impl.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class SanPhamController {
    @Autowired
    SanPhamService sanPhamService;

    @Autowired
    SanPhamRepo repo;

    @RequestMapping("home")
    public String index(){
        return "index";
    }
    @RequestMapping("/getAllSanPham")
    public List<SanPhamEntity> getAllSanPham(){
        List<SanPhamEntity> list = repo.findAll();
        return list;
    }
}
