package com.app.service;

import java.util.List;

import com.app.dto.ManagerDTOReq;
import com.app.dto.ManagerDTOResp;

public interface ManagerService {
	ManagerDTOResp createManager(ManagerDTOReq managerDTO);

	ManagerDTOReq getManagerById(Long managerId);

	List<ManagerDTOReq> getAllManagers();

	Long deleteManager(Long managerId);
}
