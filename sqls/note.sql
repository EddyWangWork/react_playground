CREATE TABLE Trip (
    ID int,
    Name varchar(255),
    FromDate Date,
    ToDate Date
);

CREATE TABLE TripDetailType (
    ID int,
    Name varchar(255)
);

CREATE TABLE TripDetail (
    ID int,
    TripID int,
    TripDetailTypeID int,
    Date Date,
    Name varchar(255)
);

----------------------

USE [DS]
GO

INSERT INTO [dbo].[Trip]
           ([ID]
           ,[Name]
           ,[FromDate]
           ,[ToDate])
     VALUES
           (1,'Brazil', '2023-08-01','2023-08-04')
GO

----------------------

USE [DS]
GO

INSERT INTO [dbo].[TripDetailType]
           ([ID]
           ,[Name])
     VALUES
           (1,'Flight'),
           (2,'Breakfast'),
           (3,'Lunch'),
           (4,'Dinner')
GO

----------------

USE [DS]
GO

INSERT INTO [dbo].[TripDetail]
           ([ID]
           ,[TripID]
           ,[TripDetailTypeID]
           ,[Date]
           ,[Name])
     VALUES
           (1,1,1,'2023-08-01', 'KUL -> KLIA2 DEPART:1100'),
           (2,1,2,'2023-08-01', 'Nasi lemak'),
           (1,1,3,'2023-08-01', 'Seafood Restorant')
GO




