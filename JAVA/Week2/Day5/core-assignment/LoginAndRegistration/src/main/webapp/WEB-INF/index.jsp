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
<title>Login & Registration</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="container">



		<div>
			<h1>welcome !</h1>
			<p>Join our growing community</p>
		</div>

		<div>
			<div class="container">
				<h3>register</h3>
				<form:form action="/register" method="post" modelAttribute="register">
					
				<div class="mb-3">
				    <form:label  path="name" class="form-label" >User Name</form:label>
				    <form:input path="name" type="text" class="form-control" aria-describedby="emailHelp"/>
				     <form:errors path="name" class="form-label"/>
				  </div>	
					
				  <div class="mb-3">
				    <form:label  path="email" class="form-label" >Email address</form:label>
				    <form:input path="email" type="email" class="form-control" aria-describedby="emailHelp"/>
				     <form:errors path="email" class="form-label"/>
				  </div>
				  <div class="mb-3">
				    <form:label path="password" for="exampleInputPassword1" class="form-label">Password</form:label>
				    <form:input path="password" type="password" class="form-control"/>
				    <form:errors path="password" class="form-label"/> 
				  </div>
				  
				  <div class="mb-3">
				    <form:label path="confpassword" for="exampleInputPassword1" class="form-label"> Confirm Password</form:label>
				    <form:input path="confpassword" type="password" class="form-control"/>
				    <form:errors path="confpassword" class="form-label"/> 
				  </div> 
				  <input type="submit" value="Submit" class="btn btn-primary"  />
				</form:form>

			</div>

			<div class="container">
				<h3>login</h3>
				<form:form action="/login" method="post" modelAttribute="login">
				  <div class="mb-3">
				    <form:label  path="email" class="form-label" >Email address</form:label>
				    <form:input path="email" type="email" class="form-control" aria-describedby="emailHelp"/>
				     <form:errors path="email" class="form-label"/>
				    <div class="form-text">We'll never share your email with anyone else.</div>
				  </div>
				  <div class="mb-3">
				    <form:label path="password" for="exampleInputPassword1" class="form-label">Password</form:label>
				    <form:input path="password" type="password" class="form-control"/>
				    <form:errors path="password" class="form-label"/> 
				  </div> 
				  <input type="submit" value="Submit" class="btn btn-primary"  />
				</form:form>
			</div>
		</div>








	</div>

</body>
</html>