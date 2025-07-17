<!DOCTYPE html>
<html>
<head>
    <title>Clinic Management System</title>
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            background: #f5f7fa;
            font-family: 'Segoe UI', sans-serif;
        }
        .header {
            background-color: #007bff;
            color: white;
            padding: 30px 10px;
            text-align: center;
        }
        .navbar-brand {
            font-weight: bold;
        }
        .nav-link {
            font-weight: bold;
        }
        .features {
            padding: 40px 0;
        }
        .feature-box {
            background: white;
            padding: 25px;
            margin: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .feature-box img {
            margin-bottom: 15px;
        }
        .footer {
            background: #343a40;
            color: white;
            padding: 15px;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <div class="header">
        <h1>Clinic Management System</h1>
        <p>Manage Patients, Medicines, Appointments, Billing & More</p>
    </div>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">CMS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navLinks">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a href="login.php" class="nav-link">Login</a></li>
                <li class="nav-item"><a href="patients/index.php" class="nav-link">Patients</a></li>
                <li class="nav-item"><a href="medicines/index.php" class="nav-link">Medicines</a></li>
                <li class="nav-item"><a href="appointments/index.php" class="nav-link">Appointments</a></li>
                <li class="nav-item"><a href="billing/index.php" class="nav-link">Billing</a></li>
            </ul>
        </div>
    </nav>

    <!-- Features Section -->
    <div class="container features text-center">
        <div class="row">
            <div class="col-md-4 feature-box">
                <img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png" alt="Patients" width="80">
                <h3>Patients</h3>
                <p>Add, View, Edit, Delete patient records with ease.</p>
            </div>
            <div class="col-md-4 feature-box">
                <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Medicines" width="80">
                <h3>Medicines</h3>
                <p>Manage inventory and suppliers for clinic medicines.</p>
            </div>
            <div class="col-md-4 feature-box">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="Appointments" width="80">
                <h3>Appointments</h3>
                <p>Book and manage patient-doctor appointments.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 feature-box">
                <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Billing" width="80">
                <h3>Billing</h3>
                <p>Generate bills and print prescription details quickly.</p>
            </div>
            <div class="col-md-4 feature-box">
                <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Reports" width="80">
                <h3>Reports</h3>
                <p>Upload test results, medical history, and other reports.</p>
            </div>
            <div class="col-md-4 feature-box">
                <img src="https://cdn-icons-png.flaticon.com/512/1008/1008431.png" alt="Dashboard" width="80">
                <h3>Dashboard</h3>
                <p>Track clinic activities and manage all in one place.</p>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>&copy; <?php echo date("Y"); ?> Clinic Management System. Developed by Your Team.</p>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
