package com.traview.config.oauth;

import com.traview.domain.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomOAuth2UserService customOAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .headers().frameOptions().disable()
                .and()
                    .authorizeRequests()
                // 권한 관리 대상을 지정하기 위한 옵션
                .antMatchers("/", "/css/**", "/images/**",
                        "/js/**", "/h2-console/**").permitAll()
                // api/v1/으로 들어오는 요청에 대해서는 USER 권한이 있는 사람만 가능하도록 설정
                .antMatchers("/api/v1/**").hasRole(Role.USER.name())
                // 위 URL을 제외한 나머지 URL에 대해서는 인증된 사용자만 사용할 수 있도록 설정
                .anyRequest().authenticated()
                .and()
                    .logout()
                        // 로그아웃 성공 시 /로 이동
                        .logoutSuccessUrl("/")
                .and()
                    .oauth2Login()
                        // Oauth2 로그인 성공 이후 사용자 정보를 가져올 떄의 설정들 담당
                        .userInfoEndpoint()
                            // 소셜 로그인 성공 시 진행할 UserService 인터페이스의 구현체를 등록
                            // 사용자 정보를 가져온 상태에서 추가로 진행하고자 하는 기능 명시
                            .userService(customOAuth2UserService);
    }
}
