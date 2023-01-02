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
<title>Read Share</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">

		<div>
			<h1>Save Travels</h1>
		</div>
		<div>
			${allTravels }
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Expense</th>
						<th scope="col">Vendor</th>
						<th scope="col">Amount</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="tra" items="${allTravels}">
						<tr>
							 <th scope="row"> <a href="/expenses/${tra.id}"> <c:out value="${tra.name}" /> </a></th>
							<td><c:out value="${tra.vendor}" /></td>
							<td><c:out value="${tra.amount}" /></td>
							<td>
							<a href="/expenses/edit/${tra.id}" class="btn btn-primary">Edit</a>
							<a href="/expenses/delete/${tra.id}" class="btn btn-danger">Delete</a>
							
							</td>
						</tr>
					</c:forEach>
				<tbody>
			</table>
		</div>
		<div>
			<hr />
			
			
	<div>
		<h1>Add an expense</h1>
	</div>
	<div>
		<form:form action="/addProssess" method="post" modelAttribute="travel">
        <form:errors path="*"/>
    <p>
        <form:label path="Name">Name</form:label>
        <form:input path="Name"/>
    </p>
    <p>
        <form:label path="Description">Description</form:label>
       
        <form:textarea path="Description"/>
    </p>
    <p>
        <form:label path="Vendor">Vendor</form:label>
        
        <form:input path="Vendor"/>
    </p>
    <p> 
        <form:label path="Amount">Amount</form:label>
           
        <form:input type="number" path="Amount"/>
    </p>    
    <input type="submit" value="Submit"/>
</form:form>    

	</div>
		

		</div>








	</div>
</body>
</html>