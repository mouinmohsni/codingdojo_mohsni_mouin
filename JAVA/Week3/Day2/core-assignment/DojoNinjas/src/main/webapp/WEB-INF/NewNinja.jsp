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
<title>New ninja</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>


	<div class="container">

		<div>
			<form:form action="/addninja" method="post" modelAttribute="ninja">
				
				<form:label path="dojos">Dojo :</form:label>
				<form:select class="form-select" path="dojos">
					<c:forEach var="dojo" items="${allDojos}">
						<form:option value="${dojo.id}">
							<c:out value="${dojo.name}" />
						</form:option>
					</c:forEach>
				</form:select>

				<div class="p-2 m-2">
					<p>
						<form:label path="lastName">First name</form:label>
						<form:input path="firsName" />
					<form:errors path="lastName" />
					</p>
				</div>
				<p>
					<form:label path="lastName">Last name</form:label>
					<form:input path="lastName" />
				<form:errors path="lastName" />
				</p>

				<p>
					<form:label path="age">Age</form:label>
					<form:input type="number" path="age" />
					<form:errors path="age" />
				</p>


				<input type="submit" value="Submit" />
			</form:form>

		</div>
		</div>
</body>
</html>