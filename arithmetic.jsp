<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Arithmetic Operations</title>
</head>
<body>
    <h2>Basic Arithmetic Operations</h2>
    
    <form method="post">
        <label for="num1">Enter first number:</label>
        <input type="number" id="num1" name="num1" required>
        <br><br>

        <label for="num2">Enter second number:</label>
        <input type="number" id="num2" name="num2" required>
        <br><br>

        <label for="operation">Select operation:</label>
        <select id="operation" name="operation" required>
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (-)</option>
            <option value="multiply">Multiplication (*)</option>
            <option value="divide">Division (/)</option>
        </select>
        <br><br>

        <input type="submit" value="Calculate">
    </form>

    <%
        if (request.getMethod().equalsIgnoreCase("POST")) {
            try {
                double num1 = Double.parseDouble(request.getParameter("num1"));
                double num2 = Double.parseDouble(request.getParameter("num2"));
                String operation = request.getParameter("operation");
                double result = 0;

                switch (operation) {
                    case "add":
                        result = num1 + num2;
                        break;
                    case "subtract":
                        result = num1 - num2;
                        break;
                    case "multiply":
                        result = num1 * num2;
                        break;
                    case "divide":
                        if (num2 != 0) {
                            result = num1 / num2;
                        } else {
                            out.println("<p style='color:red;'>Cannot divide by zero!</p>");
                        }
                        break;
                }

                if (operation.equals("divide") && num2 == 0) {
                    // Division by zero error already handled
                } else {
                    out.println("<h3>Result: " + result + "</h3>");
                }

            } catch (NumberFormatException e) {
                out.println("<p style='color:red;'>Invalid input! Please enter valid numbers.</p>");
            }
        }
    %>
</body>
</html>
