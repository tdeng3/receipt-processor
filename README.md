# Receipt Processor

This receipt processor application is a home assessment.
You can find more details from here.
https://github.com/fetch-rewards/receipt-processor-challenge/blob/main/README.md

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Clone the Repository](#clone-the-repository)
  - [Build the Docker Image](#build-the-docker-image)
  - [Run the Docker Container](#run-the-docker-container)
- [Testing the API](#testing-the-api)
  - [Process a Receipt](#process-a-receipt)
  - [Get Points](#get-points)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### Prerequisites

- **Docker**: Ensure Docker is installed and running on your machine.
- **Git**: For cloning the repository.

### Installation

1. Clone the repository:

```bash
Copy
   git clone https://github.com/tdeng3/receipt-processor-js.git
   cd receipt-processor-js

```

## Build the Docker Image

### Build the Docker image using the following command:

```bash
Copy
docker build -t receipt-processor .
```

## Run the Docker Container

### Start the container on port 5000:

```bash
Copy
docker run -p 5000:5000 receipt-processor
```

## Testing the API

### Process a Receipt

### Submit a receipt using the POST /receipts/process endpoint.

### Example using curl:

```bash
Copy
curl -X POST http://localhost:5000/receipts/process \
     -H "Content-Type: application/json" \
     -d '{
           "retailer": "Target",
           "purchaseDate": "2022-01-01",
           "purchaseTime": "13:01",
           "items": [
             {"shortDescription": "Mountain Dew 12PK", "price": "6.49"},
             {"shortDescription": "Emils Cheese Pizza", "price": "12.25"},
             {"shortDescription": "Knorr Creamy Chicken", "price": "1.26"},
             {"shortDescription": "Doritos Nacho Cheese", "price": "3.35"},
             {"shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ", "price": "12.00"}
           ],
           "total": "35.35"
         }'
```

### The response will include a receipt ID:

```json
{ "id": "generated-receipt-id" }
```

## Get Points

### Retrieve points for the receipt with a GET request to /receipts/{id}/points:

```bash
    Copy
    curl http://localhost:5000/receipts/generated-receipt-id/points
```

## Response example:

```json
{ "points": 28 }
```

### If the receipt ID is not found, a 404 error is returned.

API Endpoints
Endpoint Method Description
/receipts/process POST Submit a receipt for processing.
/receipts/{id}/points GET Retrieve points for a processed receipt.
Contributing
Contributions are welcome! Please follow these steps:
