/**
 * @apiDefine adminError
 * @apiError Error  parameter error 401
 */


/**
 * @api                 {post}           /admins/login 관리자 로그인
 * @apiVersion          0.1.0
 * @apiName             admin login
 * @apiGroup            Admin
 *
 * @apiDescription
 * Login a user with username/email and password
 *
 * @apiParam            {String}        email 	    admin email address
 * @apiParam            {String}        password 	admin login password
 *
 * @apiSuccess          {String}        id          accessTokenId
 * @apiSuccess          {String}        ttl         토큰 유효 시간
 * @apiSuccess          {String}        created     토큰 생성 날짜
 * @apiSuccess          {String}        userId      userId
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *  {
 *     "id": "rcsYDexwICKGdztdwEBlZ5vWAJG4d9FyERDBIrpZcYLHUmYkbgyfLrmU25XTkO2t",
 *     "ttl": 1209600,
 *     "created": "2017-11-15T12:55:34.089Z",
 *     "userId": 1
 *  }
 * @apiUse           adminError
 */

 /**
 * @api                 {post}           /admins/login 관리자 로그아웃
 * @apiVersion          0.1.0
 * @apiName             admin logout
 * @apiGroup            Admin
 *
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Logout a user with access token
 *
 * @apiUse           adminError
 */