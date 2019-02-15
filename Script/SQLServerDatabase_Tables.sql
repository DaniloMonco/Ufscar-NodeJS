CREATE DATABASE [Ufscar]
GO

USE [Ufscar]
GO


CREATE TABLE [dbo].[USER](
	[UserId] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Login] [varchar](25) NOT NULL,
	[Name] [varchar](60) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[Password] [varchar](20) NOT NULL
	)
GO


CREATE TABLE [dbo].[USERMOVIES](
	[UserId] [int] NOT NULL CONSTRAINT [fk_user] FOREIGN KEY([UserId]) REFERENCES [dbo].[USER] ([UserId]),
	[MovieId] [int] NOT NULL ,
PRIMARY KEY
(
	[UserId],
	[MovieId]
))



