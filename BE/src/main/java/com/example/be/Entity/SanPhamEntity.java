package com.example.be.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SanPham")
public class SanPhamEntity {

        @Id
        private Integer MaSP;

        @Column
        private Integer MaDM;

        @Column
        private String TenSP;

        @Column
        private String SoLuong;

        @Column
        private String MoTa;

        @Column
        private String Anh;

        @Column
        private String MauSac;

        @Column
        private String Size;

}
