package com.example.be.Repository;

import com.example.be.Entity.SanPhamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface SanPhamRepo extends JpaRepository<SanPhamEntity,Integer> {
}
