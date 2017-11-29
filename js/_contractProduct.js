/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


 /**
 * @api                 {post}           /contractProducts a.약정별 상품 등록
 * @apiVersion          0.1.0
 * @apiName             contractProduct regist
 * @apiGroup            ContractProduct
 * 
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * 
 * @apiDescription
 * Create a new instance of the model and persist it into the data source
 * 
 * 
 * @apiParam   {String}     name                           상품명
 * @apiParam   {Integer}    class                          등급(silver=0/ gold=1/ vip=2)
 * @apiParam   {String}     period                         기간
 * @apiParam   {Integer}    price                          판매가
 * @apiParam   {Integer}    discount                       할인가
 * 
 * @apiSuccess   {String}     name                           상품명
 * @apiSuccess   {Integer}    class                          등급(silver=0/ gold=1/ vip=2)
 * @apiSuccess   {String}     period                         기간
 * @apiSuccess   {Integer}    price                          판매가
 * @apiSuccess   {Integer}    discount                       할인가
 * @apiSuccess   {ObjectId}   id                             약정별 상품 아이디
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
{
    "name": "bane",
    "class": "0",
    "period": 0,
    "price": 100,
    "discount": 100,
    "id": 2
}
 * 
 * @apiUse           adminError
 */

 /**
 * @api                 {get}           /contractProducts b.약정별 상품 조회
 * @apiVersion          0.1.0
 * @apiName             contractProduct select
 * @apiGroup            ContractProduct
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
 * 
 * @apiParam   {ObjectId}   id                             약정별 상품 아이디

 * 
 * @apiSuccess   {String}     name                           상품명
 * @apiSuccess   {Integer}    class                          등급(silver=0/ gold=1/ vip=2)
 * @apiSuccess   {String}     period                         기간
 * @apiSuccess   {Integer}    price                          판매가
 * @apiSuccess   {Integer}    discount                       할인가
 * @apiSuccess   {ObjectId}   id                             약정별 상품 아이디
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
[
 
    {
        "name": "bane",
        "class": "0",
        "period": 0,
        "price": 100,
        "discount": 100,
        "id": 2
    }
]
 *
 * @apiUse           adminError
 */


 /**
 * @api                 {put}           /contractProducts/:id c.약정별 상품 수정
 * @apiVersion          0.1.0
 * @apiName             contractProduct update
 * @apiGroup            ContractProduct
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Replace an existing model instance or insert a new one into the data source
 * 
 * @apiParam   {ObjectId}     id                           약정펼 상품 아이디
 * @apiParam   {String}     name                           상품명
 * @apiParam   {Integer}    class                          등급(silver=0/ gold=1/ vip=2)
 * @apiParam   {String}     period                         기간
 * @apiParam   {Integer}    price                          판매가
 * @apiParam   {Integer}    discount                       할인가
 * 
 * @apiSuccess   {String}     name                           상품명
 * @apiSuccess   {Integer}    class                          등급(silver=0/ gold=1/ vip=2)
 * @apiSuccess   {String}     period                         기간
 * @apiSuccess   {Integer}    price                          판매가
 * @apiSuccess   {Integer}    discount                       할인가
 * @apiSuccess   {ObjectId}   id                             약정별 상품 아이디
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
{
    "name": "bane",
    "class": "0",
    "period": 0,
    "price": 100,
    "discount": 100,
    "id": 2
}
 * @apiUse           adminError
 */


 /**
 * @api                 {delete}           /contractProducts/:id d.캡슐 삭제
 * @apiVersion          0.1.0
 * @apiName             contractProduct delete
 * @apiGroup            ContractProduct
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Delete a model instance by {{id}} from the data source.
 * 
 * @apiParam   {ObjectId}     id                           약정펼 상품 아이디
 * 
 * @apiUse           adminError
 */


 