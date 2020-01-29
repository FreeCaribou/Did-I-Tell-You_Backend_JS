define({ "api": [
  {
    "type": "get",
    "url": "/relationship/",
    "title": "Get all relationship",
    "group": "Relationship",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "GetRelationship"
  },
  {
    "type": "get",
    "url": "/relationship/:id",
    "title": "Get one relationship by id",
    "group": "Relationship",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "GetRelationshipId"
  },
  {
    "type": "post",
    "url": "/relationship/",
    "title": "Create a new relationship",
    "group": "Relationship",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the new relationship</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new relationship Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/relationship-controller.js",
    "groupTitle": "Relationship",
    "name": "PostRelationship"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Get all user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relationships",
            "description": "<p>All the relationship of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationships.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationships.name",
            "description": "<p>Name of the relationship</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/user-controller.js",
    "groupTitle": "User",
    "name": "GetUser"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get one user by id",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relationships",
            "description": "<p>All the relationship of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationships.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationships.name",
            "description": "<p>Name of the relationship</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/user-controller.js",
    "groupTitle": "User",
    "name": "GetUserId"
  }
] });
