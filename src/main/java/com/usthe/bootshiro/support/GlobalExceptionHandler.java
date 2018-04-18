package com.usthe.bootshiro.support;

import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import com.usthe.bootshiro.domain.vo.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/* *
 * @Author tomsun28
 * @Description 全局的的异常拦截器（拦截所有的控制器）（带有@RequestMapping注解的方法上都会拦截）
 * @Date 22:40 2018/4/16
 */
@RestControllerAdvice
@Order(-1)
public class GlobalExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);


    /* *
     * @Description 拦截操作数据库异常
     * @Param [e]
     * @Return com.usthe.bootshiro.domain.vo.Message
     */
    @ExceptionHandler(DataAccessException.class)
    @ResponseStatus(HttpStatus.OK)
    public Message sqlException(DataAccessException e) {
        LOGGER.error("数据操作异常:",e);
        final Throwable cause = e.getCause();
        // 之后判断cause类型进一步记录日志处理
        if (cause instanceof MySQLIntegrityConstraintViolationException ) {

        }
        return new Message().error(1111, "服务器开小差");
    }

    /* *
     * @Description拦截未知的运行时异常
     * @Param [e]
     * @Return com.usthe.bootshiro.domain.vo.Message
     */
    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.OK)
    public Message notFoundException(RuntimeException e) {
        LOGGER.error("运行时异常:",e);
        return new Message().error(1111,"服务器开小差");
    }
}
