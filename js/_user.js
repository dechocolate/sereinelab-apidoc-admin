 /**
 * @api                 {get}           /users a.사용자 조회
 * @apiName             user select
 * @apiGroup            User
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
 * 
 * @apiSuccess         {ObjectId}   id                             userId
 * @apiSuccess         {String}     email                          이메일
 * @apiSuccess         {String}     class                          등급 (vip/ gold/ silver) / 보류
 * @apiSuccess         {String}     name                           닉네임
 * @apiSuccess         {String}     gender                         성별
 * @apiSuccess         {String}     birth                          생년월일
 * @apiSuccess         {String}     zipcode                        우편번호
 * @apiSuccess         {String}     address1                       주소
 * @apiSuccess         {String}     address2                       주소상세
 * @apiSuccess         {String}     phone                          휴대폰번호
 * @apiSuccess         {Boolean}    emailVerified                  이메일인증여부 (Default : false)
 * @apiSuccess         {Boolean}    available                      사용여부 ( Default : true)
 * @apiSuccess         {String}     created                        회원가입일 (생성일)
 * 
 * 
 * @apiUse           adminError
 */

/**
 * @api                 {post}           /users/:id/dnas b.사용자 dna 조회
 * @apiName             dna select
 * @apiGroup            User
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Queries dnas of user
 *
 * 
 * @apiParam    {ObjectId}      id              사용자 아이디
 * 
 * @apiSuccess    {String}        date                 주문일
 * @apiSuccess    {String}        progress             진행상황(미발송/ 발송하기/ 발송중) 
 * @apiSuccess    {String}        hospital             검사기관  
 * @apiSuccess    {ObjectId}      userId               사용자 아이디  
 * 
 * @apiUse           adminError
 */