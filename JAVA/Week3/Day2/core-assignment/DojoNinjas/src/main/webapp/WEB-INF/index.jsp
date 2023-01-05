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
<title>DOJOS</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="container">

		<div>
			<h1>add new Dojo</h1>
			<a href="/newdojo"> add Dojo</a>
			 <a href="/newninja"> add new ninja</a>
		</div>
		<div>

			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Name</th>

						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="dojo" items="${allDojos}">
						<tr>
							<th scope="row"><a href="/dojo/${dojo.id}"> <c:out value="${dojo.name}" /></a></th>
						</tr>
					</c:forEach>
				<tbody>
			</table>
		</div>
	</div>



</body>
</html>