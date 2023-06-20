# Command-Line-Interface-usingNode.js-MongoDB

<i>The Customers CLI is a command-line interface (CLI) application built with Node.js, Express, MongoDB, Inquirer, and Commander. It allows you to manage customer data through simple commands in your terminal.</i>


## Features

<ul>
- Create: Add new customers to the database by providing their details such as name, email, and phone number.
- Update: Modify existing customer information including their name, email, and phone - number.
- Delete: Remove customers from the database using their unique identifier.
- List: Display a list of all customers and their details.
</ul>

## Installation

- Clone the repository: git clone https://github.com/EZZAHIRTAHA/Command-Line-Interface-usingNode.js-MongoDB.git
- Change to the project directory: cd Command-Line-Interface-usingNode.js-MongoDB
- Install the dependencies: npm install

## Usage

- Make sure MongoDB is running on your local machine or update the database connection URL in config.js.
- Run the CLI: node commands.js [command] [options]
- Follow the prompts and provide the necessary information to execute the desired command.

## Available Commands

- add or a: Create a new customer.
- update or u: Update an existing customer.
- delete or d: Delete a customer.
- list or l: List all customers.