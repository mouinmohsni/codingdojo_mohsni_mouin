<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	<link rel="stylesheet" href="/css/main.css"/>
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<title>Insert title here</title>
</head>
<body>

	<table class="table">
		<thead>
			<tr>
				<th scope="col"> name </th>
				<th scope="col"> Price</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="fruit" items="${fruits}">	
			<tr>
				<td><c:out value ="${fruit.name}"/></td>
				<td><c:out value ="${fruit.price}"/></td>
			</tr>
			</c:forEach>
		</tbody>

</table>
 <br />



</body>
</html>