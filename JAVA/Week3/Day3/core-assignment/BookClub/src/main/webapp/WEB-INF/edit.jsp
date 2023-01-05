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
    <title>new book</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<h1> Edit</h1>

<p>user id = ${user_id }</p>

<div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card">
            <div class="card-body py-5 px-md-5">
              
				<form:form action="/edit/${book.id }" method="post" modelAttribute="book">
				<input type="hidden" name="_method" value="put">
				<form:errors path="*" class="form-label"/>               

                <!-- title input -->
                <div class="form-outline mb-4">
                  <form:label  path="title" class="form-label" for="form3Example3">Title</form:label>
                   <form:input path="title" type="text" id="form3Example3" class="form-control" />
                </div>

                <!-- authors input -->
                <div class="form-outline mb-4">
                  <form:label  path="autorName" class="form-label" for="form3Example4">Author</form:label>
                  <form:input  path="autorName" type="text"  class="form-control" />
                </div>
                
                <div class="form-outline mb-4">
                  <form:label  path="thougth" class="form-label" for="form3Example4"> My Thougth</form:label>
                  <form:textarea path = "thougth" rows = "5" cols = "30" />
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4"> Sign up </button>
				</form:form>                
                </div>
             
            </div>
          
        </div>


</body>
</html>