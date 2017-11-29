
/**
 * @api                 {get}           /statistics/ a.통계 조회 
 * @apiVersion          0.1.0
 * @apiName             statistic select
 * @apiGroup            Statistic
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find a model instance by {{id}} from the data source.

 * @apiParam          {String}          name            상품명
 * @apiParam          {Integer}         type            상품종류(약정상품=0 / 캡슐=1)  
 * @apiParam          {Integer}         price           판매금액 
 *  
 * @apiSuccess          {String}          name            상품명
 * @apiSuccess          {Integer}         type            상품종류(약정상품=0 / 캡슐=1)  
 * @apiSuccess          {Integer}         price           판매금액 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
    }
 *
 * @apiUse adminError
*/