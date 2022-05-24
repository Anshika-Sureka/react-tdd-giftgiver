/*
In this challenge, the given REST API contains information about
football matches played in the years 2011-2015.
Given a year and integer k, denoting the minimum number of
matches we are interested in, your task is to use the API to get the
names of teams that played at least k matches in the given year in
the competition named UEFA Champions League. The names must
be returned as an array and ordered in ascending order.
The given API uses pagination to return the data divided into pages.
Fetching the whole data available on the API requires multiple
requests.
To get a single page of matches played in UEFA Champions League in
the given year, perform HTTP GET request to:
https://jsonmock.hackerrank.com
/api/football_matches?competition=UEFA%20Champions%20Le
ague&year=<year>&page=<pageNumber>
where «year> denotes the year of the match and <pageNumber> is
an integer denoting the page of the results we are requesting.
For example, a GET request to
https://isonmock.hackerrank.com
/api/football_matches?competition=UEFA%20Champions%20League
&year=2011 &page=2
will return page 2 of the collection of matches played in the UEFA
Champions League in the year 2011. Pages are numbered from 1, so
in order to access the first page, you need to ask for page number 1.
*/
import React from 'react';
import { useState } from 'react';

export default function AthleticsComponent(){
    const [year, setYear] = useState('');
    const [threshold, setThreshold] = useState('');

    const enterInputYear = (e) => {
        setYear(e.target.value);
    }; 
    const enterThreshold = (e) => {
        setThreshold(e.target.value);
    };
    const getResults = (e) => {
        e.preventDefault();
        console.log(year+' '+threshold);
    };
    return (
    <div>
        <form onSubmit={getResults}>
            <label>Enter Year:
                <input type='text' value={year} onChange={enterInputYear}></input>
            </label>
            <label>Enter Threshold:
                <input type='text' value={threshold} onChange={enterThreshold}></input>
            </label>
            <input type='submit' value = 'Get Results'/>
        </form>
    </div>
    )
}