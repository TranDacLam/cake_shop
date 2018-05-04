$(document).ready(function() {
    $('.reply-btn').click(function(){
        var parrent_id = parseInt($(this).attr('data-id-comment'));
        var discussion_id = parseInt($(this).attr('data-id-discussion'));
        $('.media-list .comment-item').remove();
        var html = '<div class="comment-item comment-item--form popup-white zoom-anim-dialog">'
                        +'<form>'
                            +'<div class="col-md-6 form-line">'
                                + '<div class="form-group">'
                                    +'<label for="exampleInputUsername">Tên</label>'
                                    +'<input type="text" class="form-control" id="" placeholder=" Enter Name">'
                                +'</div>'
                                +'<div class="form-group">'
                                    +'<label for="exampleInputEmail">Email</label>'
                                    +'<input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email">'
                                +'</div>  '
                            +'</div>'
                            +'<div class="col-md-6">'
                                +'<div class="form-group">'
                                    +'<label for ="description"> Comment</label>'
                                    +'<textarea  class="form-control" id="description" rows="5" placeholder="Enter Your Message"></textarea>'
                                +'</div>'
                            +'</div>'
                            +'<input type="hidden" name="disscussion_id" value="'+discussion_id+'">'
                            +'<input type="hidden" name="parent_id" value="'+parrent_id+'">'
                            +'<div class="col-md-12 text-center">'
                                +'<div>'
                                    +'<button type="button" class="btn btn-default submit">'
                                    + '<i class="fa fa-paper-plane" aria-hidden="true"></i> Trả lời bình luận</button>'
                                +'</div>'
                            +'</div>'
                        +'</form>'
                    +'</div>';
        // $('#reply-'+parrent_id).addClass('in');
        if(!($('#reply-'+parrent_id).hasClass('in'))){
            $('#reply-'+parrent_id).addClass('in');
            $('#reply-'+parrent_id).attr('style', '');
        }
        $('#reply-'+parrent_id+' ul.media-list>li').append(html);
    });
});