# BACKEND 2-DAY HACKATHON	

Using the data from the JSON file, build a funtional **FULL CRUD** **API**.

## Your Task

As a developer you are assigned to build an api that takes in the data from the `attendees.json` for the latest "Nerd Out" gathering happening in April. 

Create an **API** that takes in the data from the `attendees.json` file. You can use Mongoose/Express, Flask,  Django RESTful Framework or any technology that you are comfortable with. 

At the moment there are **1,000** attendees. You must have endpoints that...

- Shows all 1,000 attendees
- Shows all listed based upon what team number that is inputed

**GET**

```
 /api/team/1
```

​	should return a list of attendees that is on team 1


- Shows all based upon one of the following companies: `Apple`, `Microsoft`, `Google`, `Yahoo`, `Adobe`, `Amazon`, `Meta`, `Sony`, `Oracle`

**GET**

```
 /api/company/Apple
```

​	should return a list of Apple attendees

- Show attendees based upon the title: `President`

**GET**

```
 /api/title/President
```

​	should return a list of attendee(s) who's title is `President`

- Find attendee id #**793** and change their company from `Google` to `NASA`
- Find attendee id #**98** Mojo Jojo and delete them from the **API**
- Create a new attendee



###  Bonus:

 - Deploy your API
 - Convert the phone field format from `xxx-xxxxxxx` to `(xxx) xxx-xxxx`.
 - Take the date formate from month/year and separate it to have it's own fields (month and year)
 - Be able to search by any part of the name and return the results 

------


## Attendee sample

```
{
		"id": 1,
		"name": "Bob Ross",
		"phone": "453-848156",
		"address": "4010 Electric Av.",
		"city": "Las Vegas",
		"state": "Nevada",
		"country": "United States",
		"postalZip": "34556",
		"email": "HappyTrees@happyclouds.edu",
		"Company": "Apple",
		"companyFunded": 82.16,
		"userID": "DO19252537151321083934722339",
		"team": 6,
		"paid": true,
		"date": "02/23",
		"title": "CustomerSuccess"
	}
```



