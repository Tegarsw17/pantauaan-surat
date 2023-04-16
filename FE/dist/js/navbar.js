const element = document.getElementById('navbar')
let navItemAdmin = `<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
<!-- Add icons to the links using the .nav-icon class
with font-awesome or any other icon font library -->
<li class="nav-item">
  <a href="#" class="nav-link active">
    <i class="nav-icon far fa-envelope"></i>
    <p>
      Surat
      <i class="right fas fa-angle-left"></i>
    </p>
  </a>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="./suratmasuk.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Surat Masuk</p>
      </a>
    </li>
  </ul>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="./suratkeluar.html" class="nav-link active">
        <i class="far fa-circle nav-icon"></i>
        <p>Surat Keluar</p>
      </a>
    </li>
  </ul>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="./tambahsurat.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Tambah Surat</p>
      </a>
    </li>
  </ul>
</li>
<li class="nav-item">
  <a href="./register.html" class="nav-link">
    <i class="nav-icon fas fa-edit"></i>
    <p>
      Registrasi
    </p>
  </a>
</li>
</ul>`

let navItemSpv = `<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
<!-- Add icons to the links using the .nav-icon class
with font-awesome or any other icon font library -->
<li class="nav-item">
  <a href="#" class="nav-link active">
    <i class="nav-icon far fa-envelope"></i>
    <p>
      Surat
      <i class="right fas fa-angle-left"></i>
    </p>
  </a>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="./suratmasuk.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Surat Masuk</p>
      </a>
    </li>
  </ul>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="./suratkeluar.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Surat Keluar</p>
      </a>
    </li>
  </ul>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Approval</p>
      </a>
    </li>
  </ul>
</li>
</ul>`

let navItemManager = `<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
<!-- Add icons to the links using the .nav-icon class
with font-awesome or any other icon font library -->
<li class="nav-item">
  <a href="#" class="nav-link active">
    <i class="nav-icon far fa-envelope"></i>
    <p>
      Surat
      <i class="right fas fa-angle-left"></i>
    </p>
  </a>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="./suratmasuk.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Surat Masuk</p>
      </a>
    </li>
  </ul>
  <ul class="nav nav-treeview">
    <li class="nav-item">
      <a href="./suratkeluar.html" class="nav-link">
        <i class="far fa-circle nav-icon"></i>
        <p>Surat Keluar</p>
      </a>
    </li>
  </ul>
</li>
</ul>`

// admin/staff
var navRole = localStorage.getItem('role_id')
if (navRole == 1) {
  element.innerHTML = navItemAdmin
}
if (navRole == 2) {
  element.innerHTML = navItemSpv
}
if (navRole == 3) {
  element.innerHTML = navItemManager
}

// supervisor/kepala bidang

// manager/kepala cabang
