package com.usthe.bootshiro.config.restful;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/* *
 * @Author tomsun28
 * @Description swagger2配置
 * @Date 21:05 2018/3/17
 */
@Configuration
@EnableSwagger2
public class SwaggerConfiguration {

	@Bean
	public Docket createRestApi() {
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.usthe.bootshiro.controller"))
				.paths(PathSelectors.any()).build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("bootshiro:"+" Restful APIs")
				.description("restful apis docs")
				.termsOfServiceUrl("usThe.com").version("1.0").build();
	}


}
