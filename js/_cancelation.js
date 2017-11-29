 /**
 * @api                 {get}           /cancelations a.위약금 내역 조회
 * @apiName             cancelation select
 * @apiGroup            Cancelation
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 * 
 * @apiSuccess      {String}        date        약정취소일
 * @apiSuccess      {String}        progress    처리사항(완료 / 미완료)    
 * @apiSuccess      {Integer}       charge      위약금액        
 * @apiSuccess      {String}        memo        세부 내용        
 * @apiSuccess      {ObjectId}      userId      사용자 아이디      
 * 
 * @apiUse           adminError
 */

  /**
 * @api                 {get}           /users/:id/cancelations b.위약금 내역 개인 조회
 * @apiName             personal cancelation select
 * @apiGroup            Cancelation
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 * 
 * @apiParam      {ObjectId}        id          사용자 아이디    
 * 
 * @apiSuccess      {String}        date        약정취소일
 * @apiSuccess      {String}        progress    처리사항(완료 / 미완료)    
 * @apiSuccess      {Integer}       charge      위약금액        
 * @apiSuccess      {String}        memo        세부 내용        
 * @apiSuccess      {ObjectId}      userId      사용자 아이디    
 * 
 * @apiUse           adminError
 */

