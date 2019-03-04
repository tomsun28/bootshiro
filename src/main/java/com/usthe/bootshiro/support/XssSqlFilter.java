package com.usthe.bootshiro.support;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @author tomsun28
 * @date 21:24 2018/4/16
 */
@Order(1)
@WebFilter(filterName = "xssFilter", urlPatterns = "/*", asyncSupported = true)
public class XssSqlFilter implements Filter {

    private static final Logger LOGGER = LoggerFactory.getLogger(XssSqlFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        LOGGER.debug("xssFilter initialized");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        XssSqlHttpServletRequestWrapper xssSqlHttpServletRequestWrapper = new XssSqlHttpServletRequestWrapper((HttpServletRequest) servletRequest);
        filterChain.doFilter(xssSqlHttpServletRequestWrapper, servletResponse);
    }

    @Override
    public void destroy() {
        LOGGER.debug("xssFilter destroy");
    }
}
