package com.app.service;

import java.util.List;

import com.app.dto.ManagerDTOAuth;
import com.app.dto.ManagerDTOReq;
import com.app.dto.ManagerDTOResp;
import com.app.exception.EmptyDataException;

public interface ManagerService {
	ManagerDTOResp createManager(ManagerDTOReq managerDTO);

	ManagerDTOReq getManagerById(Long managerId);

	List<ManagerDTOReq> getAllManagers()throws EmptyDataException;

	Long deleteManager(Long managerId);
	
	ManagerDTOResp authenticateManager(ManagerDTOAuth authDTO);
}
