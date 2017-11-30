/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


 /**
 * @api                 {post}           /capsules a.캡슐 등록
 * @apiVersion          0.1.0
 * @apiName             capsule regist
 * @apiGroup            Capsule
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
 * @apiParam   {String}     english                        영문상품명
 * @apiParam   {Boolean}    isSelling                      판매여부
 * @apiParam   {String}     class                          등급
 * @apiParam   {String}     material                       재료선정
 * @apiParam   {String}     code                           캡슐코드
 * @apiParam   {Integer}    supply                         공급가
 * @apiParam   {Integer}    price                          판매가
 * @apiParam   {Integer}    Integercount                   재고수량
 * @apiParam   {Integer}    alarm                          알람수량
 * @apiParam   {String}     text                           상세설명
 * 
 * @apiSuccess   {ObjectId}   id                             capsule ID
 * @apiSuccess   {String}     name                           상품명
 * @apiSuccess   {String}     english                        영문상품명
 * @apiSuccess   {Boolean}    isSelling                      판매여부
 * @apiSuccess   {String}     class                          등급
 * @apiSuccess   {String}     material                       재료선정
 * @apiSuccess   {String}     code                           캡슐코드
 * @apiSuccess   {Integer}    supply                         공급가
 * @apiSuccess   {Integer}    price                          판매가
 * @apiSuccess   {Integer}    Integercount                   재고수량
 * @apiSuccess   {Integer}    alarm                          알람수량
 * @apiSuccess   {String}     text                           상세설명
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "name": "name",
        "english": "english",
        "isSelling": true,
        "class": "class",
        "material": "material",
        "code": "code",
        "supply": 100,
        "price": 100,
        "alarm": 100,
        "text": "text",
        "id": 3,
        "Integercount": "100"
    }
 * 
 * @apiUse           adminError
 */

 /**
 * @api                 {get}           /capsules b.캡슐 조회
 * @apiVersion          0.1.0
 * @apiName             capsule select
 * @apiGroup            Capsule
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
 * @apiParam   {ObjectId}   id                             capsule ID
 * 
 * @apiSuccess   {ObjectId}   id                             capsule ID
 * @apiSuccess   {String}     name                           상품명
 * @apiSuccess   {String}     english                        영문상품명
 * @apiSuccess   {Boolean}    isSelling                      판매여부
 * @apiSuccess   {String}     class                          등급
 * @apiSuccess   {String}     material                       재료선정
 * @apiSuccess   {String}     code                           캡슐코드
 * @apiSuccess   {Integer}    supply                         공급가
 * @apiSuccess   {Integer}    price                          판매가
 * @apiSuccess   {Integer}    Integercount                   재고수량
 * @apiSuccess   {Integer}    alarm                          알람수량
 * @apiSuccess   {String}     text                           상세설명
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
[
 
    {
        "name": "string",
        "english": "string",
        "isSelling": true,
        "class": "string",
        "material": "string",
        "code": "string",
        "supply": 0,
        "price": 0,
        "count": 0,
        "alarm": 0,
        "text": "string",
        "id": 2
    }
]
 *
 * @apiUse           adminError
 */


 /**
 * @api                 {put}           /capsules c.캡슐 수정
 * @apiVersion          0.1.0
 * @apiName             capsule update
 * @apiGroup            Capsule
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
 * @apiParam   {ObjectId}   id                             capsule ID
 * @apiParam   {String}     name                           상품명
 * @apiParam   {String}     english                        영문상품명
 * @apiParam   {Boolean}    isSelling                      판매여부
 * @apiParam   {String}     class                          등급
 * @apiParam   {String}     material                       재료선정
 * @apiParam   {String}     code                           캡슐코드
 * @apiParam   {Integer}    supply                         공급가
 * @apiParam   {Integer}    price                          판매가
 * @apiParam   {Integer}    Integercount                   재고수량
 * @apiParam   {Integer}    alarm                          알람수량
 * @apiParam   {String}     text                           상세설명
 * 
 * @apiSuccess   {ObjectId}   id                             capsule ID
 * @apiSuccess   {String}     name                           상품명
 * @apiSuccess   {String}     english                        영문상품명
 * @apiSuccess   {Boolean}    isSelling                      판매여부
 * @apiSuccess   {String}     class                          등급
 * @apiSuccess   {String}     material                       재료선정
 * @apiSuccess   {String}     code                           캡슐코드
 * @apiSuccess   {Integer}    supply                         공급가
 * @apiSuccess   {Integer}    price                          판매가
 * @apiSuccess   {Integer}    Integercount                   재고수량
 * @apiSuccess   {Integer}    alarm                          알람수량
 * @apiSuccess   {String}     text                           상세설명
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
{
    "name": "수정",
    "english": "수정",
    "isSelling": false,
    "class": "",
    "material": "",
    "code": "",
    "supply": 0,
    "price": 0,
    "alarm": 0,
    "text": "",
    "id": 1,
    "Integercount": ""
}
 * @apiUse           adminError
 */


 /**
 * @api                 {delete}           /capsules/:id d.캡슐 삭제
 * @apiVersion          0.1.0
 * @apiName             capsule delete
 * @apiGroup            Capsule
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
 * @apiParam   {ObjectId}   id                             capsule ID
 * 
 * @apiUse           adminError
 */


 /**
 * @api                 {delete}           /capsules/:id/image e.캡슐 이미지 업로드
 * @apiVersion          0.1.0
 * @apiName             capsule image upload
 * @apiGroup            Capsule
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * 포스트맨에서 테스트해야하며 캡슐 이미지는 하나이고, 두번째 등록부터 덮어씌워진다.
 *
 * 
 *
 * @apiParam        {String}        container       저장 폴더
 * @apiParam        {String}        name            이미지 이름
 * @apiParam        {String}        alias           별칭
 * @apiParam        {integer}       size            파일 크기
 * 
 * @apiSuccess        {String}        container       저장 폴더
 * @apiSuccess        {String}        name            이미지 이름
 * @apiSuccess        {String}        alias           별칭
 * @apiSuccess        {integer}       size            파일 크기
 * @apiSuccess        {ObjectId}      id              사용자 아이디
 * @apiSuccess        {ObjectId}      foreignId      캡슐 아이디(?)
 * 
 * 
 * @apiUse           adminError
 */