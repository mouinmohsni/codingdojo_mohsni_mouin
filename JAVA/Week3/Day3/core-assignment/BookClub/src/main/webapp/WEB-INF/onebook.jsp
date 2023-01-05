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
<title>one book</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	
	<div class="container">
		<div>
			<h1>
				<c:out value="${book.title}" />
			</h1>
			<a href="/books"> back to the shelves</a>

		</div>
		<div>
			<h3>
				<c:out value="${book.user.getName()}" />

				read
				<c:out value="${book.title}" />
				by
				<c:out value="${book.autorName}" />
			</h3>

		</div>

		<p>
			<c:out value="${book.thougth}" />
		</p>

			<c:if test="${user_id eq book.user.getId()}">
			<a href="/edit/${book.id}" class="btn btn-secondary">Edit</a>
			
								<form action="/book/delete/${book.id}" method="post">
									<input type="submit" value="Delete" class="btn btn-danger">
								</form>
			
			
			</c:if>

	</div>

</body>
</html>