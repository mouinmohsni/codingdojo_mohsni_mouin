<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<title>index</title>
</head>
<body class="container ">

	<!--  Nav bar  -->

	<div>
		<div>
			<h1>SAnd an Omikuji!</h1>
		</div>


	</div>
	<div class="Width 50% border border-dark bg-light p-2 d-flex ">

		<div class="p-2  " style="flex: 1">
			<form action="/goto" method="post">
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="inputEmail4">pick any number from 5 to 25</label> <input
							type="number" class="form-control" name="number" disabled>
					</div>
					<div class="form-group col-md-6">
						<label for="inputPassword4">Enter the name of any city</label> <input
							type="text" class="form-control" name="city" disabled>
					</div>
				</div>
				<div class="form-group col-md-6">
					<label for="inputAddress">enter the name of any person</label> <input
						type="text" class="form-control" name="name" disabled>
				</div>
				<div class="form-group col-md-6">
					<label for="inputAddress2">Enter professional endeavor or
						hobby : </label> <input type="text" class="form-control" name="hobby"
						disabled>
				</div>

				<div class="form-group col-md-6">
					<label for="inputCity">Enter any type of living thing</label> <input
						type="text" class="form-control" name="living" disabled>
				</div>

				<div class="form-group col-md-6">
					<label for="inputAddress2">Say something nice to someone: </label>
					<textarea name="nice" id="" cols="30" rows="10"
						class="form-control" disabled></textarea>
				</div>
				<div class="form-group col-md-6 mt-2">
					<button type="submit" class="btn btn-primary" disabled>Sign in</button>
				</div>
			</form>
		</div>
		<div class=" border border-dark bg-light p-2" style="flex: 1">
			<p>
				in
				<c:out value="${numb}" />
				, you will live in
				<c:out value="${city}" />
				with
				<c:out value="${name}" />
				as your room mate,
				<c:out value="${hobby}" />
				for a living.
			</p>
			<p>
			The nest time you see a 
			<c:out value="${living}" />
			you will have good luck.
			</p>
			<p>
			Also, 
			<c:out value="${nice}" />
			</p>
		</div>
	</div>



</body>
</html>