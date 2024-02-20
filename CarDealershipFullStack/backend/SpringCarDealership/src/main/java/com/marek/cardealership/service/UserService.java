package com.marek.cardealership.service;

import com.marek.cardealership.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    UserDTO createUser(UserDTO model);
}
