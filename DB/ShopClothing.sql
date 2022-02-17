USE Master
GO
IF EXISTS ( SELECT * FROM sys.databases WHERE name = 'ShopClothing')
			DROP DATABASE ShopClothing
GO
Create DATABASE ShopClothing
GO
USE ShopClothing
GO
CREATE TABLE DanhMuc(
MaDM int IDENTITY(1,1) PRIMARY KEY,
TenDM nvarchar(100)
)
GO
CREATE TABLE SanPham
(
MaSP int PRIMARY KEY,
MaDM int ,
TenSP nvarchar(100),
SoLuong nvarchar(100),
MoTa nvarchar(200),
Anh nvarchar(200),
MauSac nvarchar(200),
Size nvarchar(200),
CONSTRAINT fk_dm_sp FOREIGN KEY (MaDM) REFERENCES DanhMuc(MaDM)
)

GO
CREATE TABLE DonHang
(
MaDH int IDENTITY(1,1) PRIMARY KEY NOT NULL,
TenNguoiNhan nvarchar(100) NULL,
SDTNguoiNhan int NULL,
DiaChiNhan nvarchar(100) NULL,
Email nvarchar(50) NULL,
TinhTrang nvarchar(20) NULL,
NgayTao nvarchar(200) NULL
)
GO
CREATE TABLE ChiTietDonHang
(
MaSP int IDENTITY(1,1) PRIMARY KEY NOT NULL,
MaDH int NOT NULL,
TenSP nvarchar(100),
SoLuong nvarchar(100),
MoTa nvarchar(200),
Anh nvarchar(200),
MauSac nvarchar(200),
Size nvarchar(200),
CONSTRAINT fk_dh FOREIGN KEY (MaDH) REFERENCES DonHang(MaDH)
)	
GO

CREATE TABLE TaiKhoan
(
TaiKhoan nvarchar(200) Primary Key,
MatKhau nvarchar(200),
Quyen int,
Khoa bit
)