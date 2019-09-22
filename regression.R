library(dplyr)
library(ggplot2)
library(broom)

df1 = read.csv('/Users/anthonygoss/Projects/Trends/data/final_2.csv')

df <- df1 %>%
  filter(year != 2016)

df2 <- df1 %>%
  filter(year == 2016)

base_2016 <- df1 %>%
  filter(year == 2016)

train <- sample(nrow(df1), nrow(df1) * 0.8)
test <- -train

train <- df1[train,]
test <- df1[test,]

# Baseline Model predicting 2016
mod = lm(actual_r_vote ~ lag_vote,data=df)
summary(mod)

base_2016$predicted <- predict(mod, newdata=base_2016)
base_2016$residual <- base_2016$predicted - base_2016$actual_r_vote

# MODEL 1 - Random assortment of rows / years
mod1 = lm(actual_r_vote ~ rep_dem_ratio + r_state_vs_national + lag_vote, data=train)
summary(mod1)

# Predictions
test$predicted <- predict(mod, newdata=test)
test$residual <- test$predicted - test$actual_r_vote


# MODEL 2 2016 is heldout data
mod2 = lm(actual_r_vote ~ rep_dem_ratio + r_state_vs_national + d_state_vs_national + lag_vote, data=df)
summary(mod2)

# Predictions
df2$predicted <- predict(mod2, newdata=df2)
df2$residual <- df2$predicted - df2$actual_r_vote

write.table(df2, file = "2016_pred.csv",row.names=FALSE, na="",col.names=TRUE, sep=",")


# base_2016 <-  base_2016 %>%
#   mutate(Correct = ifelse(((actual_r_vote > 50) & (predicted > 50 )) | ((actual_r_vote < 50) & (predicted < 50 )), 1, 0))
# 
# table(base_2016$Correct)
