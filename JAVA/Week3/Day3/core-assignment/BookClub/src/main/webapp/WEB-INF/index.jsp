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
    <title>books</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<div>
<div>
<h1> welcome , <c:out value="${name }"/> , <c:out value="${user_id}"/> </h1> 
<p> books from evryone's shelves</p>
</div>
<div>
<a href="/logout"> Logout</a>
<a href="/books/new"> +add a to my shelf</a>
</div>
</div>

<div>
<table class="table table-striped">
				<thead>
					<tr>
					<th scope="col">id</th>
						<th scope="col">Title</th>
						<th scope="col">Author Name</th>
						<th scope="col">Posted by</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="book" items="${allbooks}">
						<tr>
							<th scope="row"> <c:out value="${book.id}" /></th>
							<td> <a href="/book/${book.id}"> <c:out value="${book.title}" /> </a> </td>
							<td> <c:out value="${book.autorName}" /></td>
							<td> <c:out value="${book.user.getName()}" /></td>
						</tr>
					</c:forEach>
				<tbody>
			</table>
</div>




</div>
</body>
</html>