# Review Questions

## What is Node.js?

Node.js is a runtime library that uses code written in Javascript. It provides the ability to write server-side tools & applications in Javascript.

## What is Express?

Express is a node.js framework. It is designed to help manage the back end. User views and routing can be configured using this.

## Mention two parts of Express that you learned about this week.

* it uses function methods like .get, .post, .put, .delete to accomplish actions.
* it is unopinionated. Any middleware software can be incorporated, including configuring your own. File structuring is up to the developer's discrection.

## What is Middleware?

middleware are functions that are performed during the request. They can be used for a number of reasons, including authentication and logging.

## What is a Resource?

Resources are the data contained within the database, accessed and modified through express requests.

## What can the API return to help clients know if a request was successful?

Status codes, typically 200 or 201.

## How can we partition our application into sub-applications?

separating functionality by using routes and/or actions.

## What is CORS and why do we need it?

Cross-origin-resource sharing. It enables access to resources from another domain than its own.
