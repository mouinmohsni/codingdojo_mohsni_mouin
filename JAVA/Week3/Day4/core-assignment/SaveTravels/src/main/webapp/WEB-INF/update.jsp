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
<title>add</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

	<div>
		<h1>Add an expense</h1>
	</div>
	<div> <a href="/expenses"> Go back</a> </div>
	<div>
		<form:form action="/edit/${travel.id }" method="post" modelAttribute="travel">
		<input type="hidden" name="_method" value="put">
    <p>
        <form:label path="Name">Name</form:label>
        <form:errors path="Name"/>
        <form:input path="Name"/>
    </p>
    <p>
        <form:label path="Description">Description</form:label>
        <form:errors path="Description"/>
        <form:textarea path="Description"/>
    </p>
    <p>
        <form:label path="Vendor">Vendor</form:label>
        <form:errors path="Vendor"/>
        <form:input path="Vendor"/>
    </p>
    <p> 
        <form:label path="Amount">Amount</form:label>
        <form:errors path="Amount"/>     
        <form:input type="number" path="Amount"/>
    </p>    
    <input type="submit" value="Submit"/>
</form:form>    

	</div>

</body>
</html>