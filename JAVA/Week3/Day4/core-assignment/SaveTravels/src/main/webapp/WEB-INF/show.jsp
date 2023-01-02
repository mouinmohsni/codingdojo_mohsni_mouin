<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Show Expense</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body class="container">
<div class="m-2">

	<div class="d-flex justify-content-between align-self-stretch">
		<h1>Expense Details</h1>
		<a href="/expenses">Go back</a>
	</div>
	<div>

		<div>
			<div class="d-flex">
				<p>Expense Name : </p>
				<p>
					<c:out value="${travel.name}" />
				</p>
			</div>
			<div class="d-flex">
				<p>Expense Description : </p>
				<p>
					<c:out value="${travel.description}" />
				</p>
			</div>
			<div class="d-flex">
				<p>Vendor : </p>
				<p>
					<c:out value="${travel.vendor}" />
				</p>
			</div>
			<div class="d-flex">
				<p>Amount Spent : </p>
				<p>
					<c:out value="${travel.amount}" />
				</p>
			</div>

		</div>
	</div>
</div>
</body>
</html>