package com.usthe.tom.config;

import io.swagger.annotations.ApiOperation;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

/**
 *  swagger配置 默认地址http://localhost:8080/swagger-ui.html
 * @author tomsun28
 * @date 21:05 2018/3/17
 */
public class SwaggerConfiguration {

	@Bean
	public Docket createRestApi() {
		return new Docket(DocumentationType.OAS_30)
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
				.paths(PathSelectors.any())
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("Swagger3接口文档")
				.description("更多请咨询服务开发者tomsun28。")
				.contact(new Contact("tomsun28。", "http://www.usthe.com", "tomsun28@outlook.com"))
				.version("2.0")
				.build();
	}

}
