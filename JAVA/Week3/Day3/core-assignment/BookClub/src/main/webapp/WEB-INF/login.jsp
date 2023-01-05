<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

<!-- Section: Design Block -->
<section class="">
  <!-- Jumbotron -->
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
    <div class="container">
    
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card">
            <div class="card-body py-5 px-md-5">
              
				<form:form action="/login" method="post" modelAttribute="login">
				<form:errors path="*" class="form-label"/>
                

                <!-- Email input -->
                <div class="form-outline mb-4">
                   <form:input path="email" type="email" id="form3Example3" class="form-control" />
                  <form:label  path="email" class="form-label" for="form3Example3">Email address</form:label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <form:input  path="password" type="password"  class="form-control" />
                  <form:label  path="password" class="form-label" for="form3Example4">Password</form:label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4"> Sign up </button>
				</form:form>                
                </div>
             
            </div>
          
        </div>
        
        <!-- login-->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              
				<form:form action="/register" method="post" modelAttribute="register">
				<form:errors path="*" class="form-label"/>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <form:input path="name" type="text"  class="form-control" />
                      <form:label  path="name" class="form-label" for="form3Example1">First name</form:label>
                    </div>
                  </div>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                   <form:input path="email" type="email" id="form3Example3" class="form-control" />
                  <form:label  path="email" class="form-label" for="form3Example3">Email address</form:label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <form:input  path="password" type="password"  class="form-control" />
                  <form:label  path="password" class="form-label" for="form3Example4">Password</form:label>
                </div>
                
					<!--  confPassword input -->
                <div class="form-outline mb-4">
                  <form:input  path="confpassword" type="password" id="form3Example4" class="form-control" />
                  <form:label  path="confpassword" class="form-label" for="form3Example4">confirm password</form:label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4"> Sign up </button>
				</form:form>                
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  
  <!-- Jumbotron -->
</section>
<!-- Section: Design Block -->

</body>
</html>