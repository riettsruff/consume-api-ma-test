/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

/**
 *
 * @author Riett
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
     
    @Bean
    @Override
    protected UserDetailsService userDetailsService() {
        UserDetails user = User
            .withUsername("riettsruff@gmail.com")
            .password("$2y$10$12MToISuFdATL9zD2nw5YuF4Mm5vvJTp4NmlxlOkK0939ntsR6dcK")
            .roles("LEARNER")
            .build();    
         
        return new InMemoryUserDetailsManager(user);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers(
                    "/resources/**", 
                    "/static/**", 
                    "/css/**", 
                    "/js/**", 
                    "/img/**", 
                    "/register", 
                    "/forgotpassword/**"
                ).permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .usernameParameter("email")
                .loginProcessingUrl("/login")
                .defaultSuccessUrl("/")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }
   
}
