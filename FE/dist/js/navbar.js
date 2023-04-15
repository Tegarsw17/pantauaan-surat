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
      <a href="./suratkeluar.html" class="nav-link">
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

// admin/staff
element.innerHTML = navItemAdmin

// supervisor/kepala bidang

// manager/kepala cabang
