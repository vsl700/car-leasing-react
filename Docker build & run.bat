@echo off
docker build -t car-leasing-react --target prod .
docker run -P --name car-leasing-reactts car-leasing-react