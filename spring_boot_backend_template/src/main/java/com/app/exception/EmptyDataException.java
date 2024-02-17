package com.app.exception;

public class EmptyDataException extends Exception {
	
	private static final long serialVersionUID = 1L;

	public EmptyDataException(String message) {
        super(message);
    }
}
